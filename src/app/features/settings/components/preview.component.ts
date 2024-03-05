import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-xl my-6">Preview</h1>

    <!-- NAVBAR-->

    @if(settingsService.isNavbarEnable()) {
    <p class="text-lg mb-3">Navbar settings</p>
    <div
      class="text-md items-center flex gap-3"
      [style.color]="settingsService.colorTitle()"
      [style.font]="settingsService.navbarFontSize()"
    >
      <p class="text-md text-blue-400">Title and Logo:</p>
      <p>{{ settingsService.title() }}</p>
    </div>

    <div class="text-md items-center flex gap-3">
      <p class="text-md text-blue-400">Navbar:</p>
      <p class="text-md" [style.color]="settingsService.navbarColor()">
        {{ settingsService.home() }}
      </p>
      <p class="text-md" [style.color]="settingsService.navbarColor()">
        {{ settingsService.openTicket() }}
      </p>
    </div>
    <!-- <pre>{{ settingsService.configNav() | json }}</pre> -->
    }

    <br />

    <!-- BODY -->

    <p class="text-lg mb-3">Job Listings Settings</p>

    <div class="text-md items-center flex gap-3">
      <p
        class="text-md text-blue-400"
        [style.color]="settingsService.colorRef()"
        [style.font-size]="settingsService.titleFontSizeRef()"
      >
        {{ settingsService.agency() }}:
      </p>
      <p
        class="text-md"
        [style.color]="settingsService.titleAttributeColorRef()"
        [style.font-size]="settingsService.titleAttributeFontSizeRef()"
      >
        Agency example
      </p>
    </div>
    <div class="text-md items-center flex gap-3">
      <p
        class="text-md text-blue-400"
        [style.color]="settingsService.colorRef()"
        [style.font-size]="settingsService.titleFontSizeRef()"
      >
        {{ settingsService.postingType() }}:
      </p>
      <p
        class="text-md"
        [style.color]="settingsService.titleAttributeColorRef()"
        [style.font-size]="settingsService.titleAttributeFontSizeRef()"
      >
        Position type example
      </p>
    </div>
    <div class="text-md items-center flex gap-3">
      <p
        class="text-md text-blue-400"
        [style.color]="settingsService.colorRef()"
        [style.font-size]="settingsService.titleFontSizeRef()"
      >
        {{ settingsService.postingDate() }}:
      </p>
      <p
        class="text-md"
        [style.color]="settingsService.titleAttributeColorRef()"
        [style.font-size]="settingsService.titleAttributeFontSizeRef()"
      >
        Position date example
      </p>
    </div>
    <div class="text-md items-center flex gap-3">
      <p
        class="text-md text-blue-400"
        [style.color]="settingsService.colorRef()"
        [style.font-size]="settingsService.titleFontSizeRef()"
      >
        {{ settingsService.postingUpdated() }}:
      </p>
      <p
        class="text-md"
        [style.color]="settingsService.titleAttributeColorRef()"
        [style.font-size]="settingsService.titleAttributeFontSizeRef()"
      >
        Last update example
      </p>
    </div>
    <div class="text-md items-center flex gap-3">
      <p
        class="text-md text-blue-400"
        [style.color]="settingsService.colorRef()"
        [style.font-size]="settingsService.titleFontSizeRef()"
      >
        {{ settingsService.workLocation() }}:
      </p>
      <p
        class="text-md"
        [style.color]="settingsService.titleAttributeColorRef()"
        [style.font-size]="settingsService.titleAttributeFontSizeRef()"
      >
        Work location example
      </p>
    </div>
    <div class="text-md items-center flex gap-3">
      <p
        class="text-md text-blue-400"
        [style.color]="settingsService.colorRef()"
        [style.font-size]="settingsService.titleFontSizeRef()"
      >
        {{ settingsService.postingDescription() }}:
      </p>
      <p
        class="text-md"
        [style.color]="settingsService.titleAttributeColorRef()"
        [style.font-size]="settingsService.titleAttributeFontSizeRef()"
      >
        Job description example
      </p>
    </div>
    <div class="text-md items-center flex gap-3">
      <p
        class="text-md text-blue-400"
        [style.color]="settingsService.colorRef()"
        [style.font-size]="settingsService.titleFontSizeRef()"
      >
        {{ settingsService.salaryRangeFrom() }}:
      </p>
      <p
        class="text-md"
        [style.color]="settingsService.titleAttributeColorRef()"
        [style.font-size]="settingsService.titleAttributeFontSizeRef()"
      >
        Salary range from example
      </p>
    </div>
    <div class="text-md items-center flex gap-3">
      <p
        class="text-md text-blue-400"
        [style.color]="settingsService.colorRef()"
        [style.font-size]="settingsService.titleFontSizeRef()"
      >
        {{ settingsService.salaryRangeTo() }}:
      </p>
      <p
        class="text-md"
        [style.color]="settingsService.titleAttributeColorRef()"
        [style.font-size]="settingsService.titleAttributeFontSizeRef()"
      >
        Salary range to example
      </p>
    </div>

    <pre>{{ settingsService.configJobPosting() | json }}</pre>
  `,
})
export class PreviewComponent {
  settingsService = inject(SettingsService);
}
