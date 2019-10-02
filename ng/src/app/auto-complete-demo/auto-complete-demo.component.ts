import { Component, OnInit } from '@angular/core';
import { CountryService } from './../country.service'

@Component({
    selector: 'auto',
    templateUrl: './auto-complete-demo.component.html',
    styleUrls: ['./auto-complete-demo.component.scss']
})
export class AutoCompleteDemoComponent implements OnInit {

    ngOnInit() {
    }

    country: any;

    countries: any[] = [];

    filteredCountriesSingle: any[];

    filteredCountriesMultiple: any[];

    brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];

    filteredBrands: any[];

    brand: string;

    constructor(private countryService: CountryService) { }

    filterCountrySingle(event) {
        let query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesSingle = this.filterCountry(query, countries);
        });
    }

    filterCountryMultiple(event) {
        let query = event.query;
        //   alert('called')
        this.countryService.getCountries().then(countries => {

            this.filteredCountriesMultiple = this.filterCountry(query, countries);
            //   let obj={
            //       name:query,
            //       code:query
            //   }
            //   this.filteredCountriesMultiple.push(obj)
            //   console.log(this.filteredCountriesMultiple);

        });
    }

    filterCountry(query, countries: any[]): any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        for (let i = 0; i < countries.length; i++) {
            let country = countries[i];


            if (country.name.toLowerCase().includes(query.toLowerCase())) {
                // console.log(query+" "+country.name);
                filtered.push(country);
            }
            //   else{
            //     filtered.push(query);
            //   }
        }
        return filtered;
    }

    filterBrands(event) {
        this.filteredBrands = [];
        for (let i = 0; i < this.brands.length; i++) {
            let brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    }

    getResponse
    getCall() {
        this.printLogs()
        this.countryService.getCall().subscribe(x => {
            this.getResponse = x
        })
    }
    postCall() {
        this.countryService.postCall().subscribe(x => {
            this.getResponse = x
        })
    }

    onKeyUp(event) {
        let slectedValue = event.srcElement.value
        console.log(event.srcElement.value);

        if (event.key == 'Enter') {
            let obj = {
                name: slectedValue,
                code: slectedValue
            }
            let suggestedCountry = false;
            for (let i = 0; i < this.filteredCountriesMultiple.length; i++) {
                if (this.filteredCountriesMultiple[i].name == slectedValue)
                    suggestedCountry = true;
            }

            console.log("suggestedCountry " + suggestedCountry);
            if (event.srcElement.value != '') {
                console.log(obj);
                console.log(this.countries);

                this.countries.push(obj)
            }

            // document.getElementsByClassName('ui-autocomplete-input-token')[0]['innerText']=''
            // document.get
            document.getElementById('hai').getElementsByClassName('undefined')[0]['value'] = ''

        }

    }

    printLogs() {
        console.log(new Date(), 'getCall log message')
        console.warn(new Date(), 'getCall warn message')
        console.error(new Date(), 'getCall err message')

        const errorMsg = 'the # is not even';
        for (let number = 2; number <= 5; number += 1) {
            console.log('the # is ' + number);
            console.assert(number % 2 === 0, '');

            console.assert(false, 'the word is %s', 'foo');

        }

        var someObject = { str: "Some text", id: 5 };
        console.log(someObject);

        var car = "Dodge Charger";
        var someObject = { str: "Some text", id: 5 };
        console.info("My first car was a", car, ". The object is:", someObject);

        console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");

        console.log("This is the outer level");
        console.group();
        console.log("Level 2");
        console.group();
        console.log("Level 3");
        console.warn("More of level 3");
        console.groupEnd();
        console.log("Back to level 2");
        console.groupEnd();
        console.debug("Back to the outer level");

        console.time("answer time");
        console.timeEnd("answer time");

        console.table(["apples", "oranges", "bananas"]);

        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        var me = new Person("John", "Smith");

        console.table(me);

        var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
        console.table(people);

    }
}
