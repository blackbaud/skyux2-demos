import {
  Component
} from '@angular/core';

import {
  SkyModalInstance
} from '@skyux/modals';

import {
  SkyProgressIndicatorChange,
  SkyProgressIndicatorDisplayMode
} from '@skyux/progress-indicator';

@Component({
  selector: 'sky-wizard-demo-modal',
  templateUrl: './wizard-demo-modal.component.html'
})
export class SkyWizardDemoModalComponent {

  public activeIndex = 0;

  public title = 'Wizard example';

  public requiredValue1: string;

  public requiredValue2: boolean;

  public displayMode = SkyProgressIndicatorDisplayMode.Horizontal;

  public get requirementsMet(): boolean {
    switch (this.activeIndex) {
      case 0:
        return !!this.requiredValue1;
      case 1:
        return !!this.requiredValue2;
      default:
        return false;
    }
  }

  constructor(
    public instance: SkyModalInstance
  ) { }

  public updateIndex(changes: SkyProgressIndicatorChange): void {
    this.activeIndex = changes.activeIndex;
  }
}
