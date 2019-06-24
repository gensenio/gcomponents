import {Component, Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: 'input[libInput]',
})
export class GcomponentsComponent implements OnInit {

  @Input() type = 'text';

  @HostBinding('class.lib-input') class = true;

  constructor() { }

  ngOnInit() {
  }

}
