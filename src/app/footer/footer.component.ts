import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faSquareTwitter = faSquareTwitter;
  faPhone = faPhone;

  constructor() { }

  ngOnInit(): void {
  }

}
