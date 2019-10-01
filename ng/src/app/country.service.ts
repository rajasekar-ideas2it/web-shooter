import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('assets/data/countries.json')
      .toPromise()
      .then(res => <any[]>res)
      .then(data => {
        // console.log(data['data'])
        return data['data'];
      });
  }

  getCall() {
    return this.http.get('http://localhost:8001')
  }

  postCall() {
    let bodyData = {
      name: 'Sandeepp Sah',
      profileData:
      {
        name: '',
        designation: 'java',
        location: 'Prakasam, Andhra Pradesh, India',
        'Work Experience': [[Object]]
      },
      source: 'talentwunder.com',
      imgurl: '',
      probabilities:
      {
        relevance: '',
        change_probability: '45',
        mobility: '20',
        contactability: ''
      }
    }

    return this.http.post('http://localhost:8001', bodyData)
  }

}
