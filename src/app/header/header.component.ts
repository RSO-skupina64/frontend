import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['login'], {relativeTo: this.route});
  }

  onOdjava() {
    this.router.navigate(['/'], {relativeTo: this.route});
  }

  onRegistracija() {
    this.router.navigate(['register'], {relativeTo: this.route});
  }

  onMojProfil() {
    this.router.navigate(['profile'], {relativeTo: this.route});
  }
}
