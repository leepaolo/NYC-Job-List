import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, RouterModule],
  template: ` <div class="navbar bg-base-100">
    <div class="flex-1">
      <a
        class="btn btn-ghost text-xl"
        [style.color]="settingsService.colorTitle()"
      >
        {{ settingsService.title() }}</a
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a
            class="cursor-pointer"
            [style.color]="settingsService.navbarColor()"
            [style.font-size]="settingsService.navbarFontSize()"
            routerLink="/home"
            >{{ settingsService.home() }}</a
          >
        </li>

        <li>
          <a
            class="cursor-pointer"
            [style.color]="settingsService.navbarColor()"
            [style.font-size]="settingsService.navbarFontSize()"
            routerLink="/settings"
            >{{ settingsService.openTicket() }}</a
          >
        </li>
        <li>
          <a
            class="cursor-pointer"
            [style.color]="settingsService.navbarColor()"
            [style.font-size]="settingsService.navbarFontSize()"
            routerLink="/settings"
            >{{ settingsService.settings() }}</a
          >
        </li>
      </ul>
    </div>
  </div>`,
})
export default class NavbarComponent {
  settingsService = inject(SettingsService);
}
