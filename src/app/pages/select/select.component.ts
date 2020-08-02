import { Component, Inject, InjectionToken, Input, OnInit } from '@angular/core';
import { randomStringGenerator } from '../../../../projects/simple-ui-component/src/lib/core/random-string-generator';
import { FormControl } from '@angular/forms';

/** Конфигурация по-умолчанию для селектов. */
export interface SuicSelectConfig {
  // Текст подсказки
  placeholder?: string;
  // /** Whether option centering should be disabled. */
  // disableOptionCentering?: boolean;
  //
  // /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */
  // typeaheadDebounceInterval?: number;
}

/** Injection token для конфигурации модуля. */
export const SUIC_SELECT_CONFIG = new InjectionToken<SuicSelectConfig>('SUIC_SELECT_CONFIG');

export function SUIC_SELECT_CONFIG_PROVIDER_FACTORY(): SuicSelectConfig {
  return {
    placeholder: 'Выбрать',
  };
}

export const SUIC_SELECT_CONFIG_PROVIDER = {
  provide: SUIC_SELECT_CONFIG,
  useFactory: SUIC_SELECT_CONFIG_PROVIDER_FACTORY,
};

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [SUIC_SELECT_CONFIG_PROVIDER]
})
export class SelectComponent implements OnInit {

  /**
   * Текущее состояние селекта (открыт/закрыт)
   */
  private open = false;
  get isOpen(): boolean {
    return this.open;
  }

  /**
   * FormControl для управления данными
   */
  @Input() control: FormControl = new FormControl();

  /**
   * Имя элемента в форме
   */
  @Input() name: string;

  /**
   * id элемента
   */
  @Input() id: string;

  /**
   * Подсказка для элемента
   */
  @Input() placeholder: string;

  constructor(
    @Inject(SUIC_SELECT_CONFIG) private selectConfig: SuicSelectConfig,
  ) {
    this.placeholder = this.placeholder ?? selectConfig.placeholder;
  }

  ngOnInit(): void {
    this.name = this.name ?? randomStringGenerator();
    this.id = this.id ?? randomStringGenerator();
  }

}
