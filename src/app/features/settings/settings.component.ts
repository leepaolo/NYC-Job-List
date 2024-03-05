import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PreviewComponent } from './components/preview.component';
import { EditorComponent } from './components/editor.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PreviewComponent, EditorComponent],
  template: `
    <div class="flex flex-col md:flex-row mx-3">
      <div class="w-full md:w-1/2">
        <app-editor />
      </div>
      <div class="w-full md:w-1/2">
        <app-preview />
      </div>
    </div>
  `,
})
export default class SettingsComponent {}
