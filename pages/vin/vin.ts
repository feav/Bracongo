import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';


@IonicPage()
@Component({
	selector: 'page-vin',
	templateUrl: 'vin.html',
})
export class VinPage {
	tasks: any = [
		{
			name: 'first task 1',
			checked: false,
			tree: [
				{
					name: 'first task 1.1',
					checked: true
				},
			]
		},
		{
			name: 'first task 2',
			checked: true
		}
	];
	currentItems: any[] = [
		[
			{
			name: "VIN ROUGE",
			profilePic: "assets/images/black/cle.png",
			about: "Apropos",
			note: "note",
			show: false,
			details: [
				{
					name: "Non definit"
				},
				{
					name: "Argentine - Mendoza"
				},
				{
					name: "Beaujolais"
				},
				{
					name: "Argentine - Mendoza"
				},
				{
					name: "Beaujolais"
				}
			]
		},
		{
			name: "VIN BLANC",
			profilePic: "assets/images/black/cle.png",
			about: "Apropos",
			note: "note",
			show: false,
			details: [
				{
					name: "Non definit"
				},
				{
					name: "Argentine - Mendoza"
				},
				{
					name: "Beaujolais"
				}
			]
		},
		{
			name: "VIN ROSE",
			profilePic: "assets/images/black/cle.png",
			about: "Apropos",
			note: "note",
			show: false,
			details: [
				{
					name: "Non definit"
				},
				{
					name: "Argentine - Mendoza"
				},
				{
					name: "Beaujolais"
				}
			]
		}
		],
		[
			{
				name: "CHAMPAGNE",
				profilePic: "assets/images/black/cle.png",
				about: "Apropos",
				note: "note",
				show: false,
				details: [
					{
						name: "Non definit"
					},
					{
						name: "Argentine - Mendoza"
					},
					{
						name: "Beaujolais"
					},
					{
						name: "Argentine - Mendoza"
					},
					{
						name: "Beaujolais"
					}
				]
			},
			{
				name: "VERY",
				profilePic: "assets/images/black/cle.png",
				about: "Apropos",
				note: "note",
				show: false,
				details: [
					{
						name: "Non definit"
					},
					{
						name: "Argentine - Mendoza"
					},
					{
						name: "Beaujolais"
					},
					{
						name: "Argentine - Mendoza"
					},
					{
						name: "Beaujolais"
					}
				]
			},
			{
				name: "JUS COMPAL",
				profilePic: "assets/images/black/cle.png",
				about: "Apropos",
				note: "note",
				show: false,
				details: [
					{
						name: "Non definit"
					},
					{
						name: "Argentine - Mendoza"
					},
					{
						name: "Beaujolais"
					},
					{
						name: "Argentine - Mendoza"
					},
					{
						name: "Beaujolais"
					}
				]
			}
		]
	];

	slidos: any[] = [
		{
			title: "A",
			description: "AA",
			image: "assets/images/chateaux/chateau1.jpg"
		},
		{
			title: "A",
			description: "AA",
			image: "assets/images/chateaux/chateau2.jpg"
		},
		{
			title: "A",
			description: "AA",
			image: "assets/images/vins/champagnes.jpg"
		}
		, {
			title: "B",
			description: "BB",
			image: "assets/images/slider/accueil/nkoyi.jpg"
		}
	];
	constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
	}
	goToDetail(item) {
		this.navCtrl.push("VinDetailPage", { item: item });
	}
	ckeck(i) {
		var ck = i.show;
		this.currentItems.forEach(
			function (item, index) {
				item.show = false;
			}
		);
		i.show = !ck;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad VinPage');
	}

	toggleMenu() {
		this.menuCtrl.toggle();
	  }
}
