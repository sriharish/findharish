import { Component, OnInit } from '@angular/core';
import { MdProgressBar } from '@angular/material';
import { splashText, aboutText, experienceText,
         processText, contactText, socialLinks,
         skillsText, resumeLink, frameworkText } from '../../config/static.strings';
import { splashImage } from '../../config/images.strings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public splashText: Object;
  public aboutText: Object;
  public experienceText: Object;
  public skillsText: Object;
  public processText: Object;
  public contactText: Object;
  public frameworkText: Object;
  public socialLinks: Object;
  public resumeLink: string;
  public splashImage: string;

  constructor() {

  }

  ngOnInit() {
    this.splashText = splashText;
    this.aboutText = aboutText;
    this.experienceText = experienceText;
    this.skillsText = skillsText;
    this.processText = processText;
    this.contactText = contactText;
    this.frameworkText = frameworkText;
    this.socialLinks = socialLinks;
    this.resumeLink = resumeLink;
    this.splashImage = splashImage;
  }

}
