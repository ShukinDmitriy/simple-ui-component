import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'suic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  /**
   * Type of the button
   */
  @Input() type: 'success' | 'info' | 'warn';

  /**
   * Button click event
   */
  @Output() buttonClick = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

}
