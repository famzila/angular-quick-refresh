import { Injectable } from '@angular/core';

import { courses } from '../data/guides.data';

@Injectable({
  providedIn: 'root'
})
export class GuidesService {

  constructor() { }

  getCourses(){
    return courses;
  }
}
