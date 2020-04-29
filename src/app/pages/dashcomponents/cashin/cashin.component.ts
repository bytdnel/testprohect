import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpService } from '../../../../services/http.service'
import { PayInfo } from '../../../models/payinfo'



@Component({
  selector: 'app-cashin',
  templateUrl: './cashin.component.html',
  styleUrls: ['./cashin.component.css'],
  providers: [HttpService]
})
export class CashinComponent implements OnInit {
	money : number
	currency : string = 'null'
	walletType : string

	value = ''
	walletWays : any[] = [null]
	error : string

	constructor(private httpService: HttpService) { }

	ngOnInit() {
	}

	setCurrency(cur) {
		this.currency = cur
		let str = this.currency + "-WAY-"
		for (var i=0; i<=7; i++) {
			var data = str + (i + 1)
			this.walletWays.unshift(data) 
		}
		this.walletWays = [null]
	}

	setWalletType(data){
		this.walletType = data
	}

	onKey(event: any) { // without type info
		var num = parseInt(event.target.value)
		if (num == 0) {
			event.target.value = ''
			console.log('0000');
			this.error = '*Число не может начинаться с нуля'
		}
		if (isNaN(num)) {
			console.log('NAN')
			event.target.value = ''
			this.error = '*Вводите число'
		} else {
			this.error = null
			if (this.currency == 'RUB') {
				if (event.target.value < 500) {
					this.error = '*Минимальная сумма пополнения 500 RUB'
	    		this.money = 500
				} 
	    	if (event.target.value >= 500) {
	    		this.error = null
	    		this.money = parseInt(event.target.value)
	    	}
 			} 
	    if (this.currency == 'USD') {
	    	if (event.target.value < 50) {
					this.error = '*Минимальная сумма пополнения 50 USD'
	    		this.money = 50
				} 
	    	if (event.target.value >= 50) {
	    		this.error = null
	    		this.money = parseInt(event.target.value)
	    	}
	    }
	    if (this.currency == 'EUR') {
	    	if (event.target.value < 40) {
					this.error = '*Минимальная сумма пополнения 40 EUR'
	    		this.money = 40
				} 
	    	if (event.target.value >= 40) {
	    		this.error = null
	    		this.money = parseInt(event.target.value)
	    	}
	    }
	    if (this.currency == 'YAH') {
	    	if (event.target.value < 150) {
					this.error = '*Минимальная сумма пополнения 150 YAH'
	    		this.money = 150
				} 
	    	if (event.target.value >= 150) {
	    		this.error = null
	    		this.money = parseInt(event.target.value)
	    	}
	    }
	}
}

  setDefaults() {
  	if (this.currency == 'RUB') {
      	this.error = '*Пополняем на '+ this.money +' RUB'
  	}
    if (this.currency == 'USD') {
      	this.error = '*Пополняем на '+ this.money +' USD'
    }
    if (this.currency == 'EUR') {
      	this.error = '*Пополняем на '+ this.money +' EUR'
    }
    if (this.currency == 'YAH') {
      	this.error = '*Пополняем на '+ this.money +' YAH'
    }

    var payInformation = {
      type: 'payInfo',
      user : {name: 'No name data', email: 'No email data'},
      currency : this.currency,
      walletType : this.walletType,
      money : this.money
    }
    this.httpService.postPayInfo(payInformation).subscribe((result : any) => {console.log(result)})
    //this.submit(payInformation)
  }


}

