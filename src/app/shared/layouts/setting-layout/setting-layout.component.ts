import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-setting-layout',
  templateUrl: './setting-layout.component.html',
  styleUrls: ['./setting-layout.component.scss']
})
export class SettingLayoutComponent implements OnInit {
  panelOpenState = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }

}
