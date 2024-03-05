import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-2xl my-6">Editor</h1>

    <h2 class="text-lg my-6">Navbar Settings</h2>
    <div class="flex flex-col gap-2 ">
      <p>Enable the Navigation Bar</p>
      <input
        type="checkbox"
        class="toggle toggle-success"
        #enableNavbar
        (input)="
          settingsService.setConfigNav('enableNavBar', enableNavbar.checked)
        "
        [checked]="settingsService.configNav().enableNavBar"
      />
      <!-- ENABLE AND SHOW NAVBAR -->
      @if(settingsService.isNavbarEnable()){
      <div class="flex gap-3 ">
        <div
          class="w-12 h-12 cursor-pointer border border-gray-300"
          style="background-color: #1D24CA;"
          (click)="setColorNav('#1D24CA')"
        ></div>
        <div
          class="w-12 h-12 cursor-pointer border border-gray-300"
          style="background-color: #3559E0"
          (click)="setColorNav('#3559E0')"
        ></div>

        <div
          class="w-12 h-12 cursor-pointer border border-gray-300"
          style="background-color: #98ABEE"
          (click)="setColorNav('#98ABEE')"
        ></div>
      </div>
      <br />
      <!-- NAV FONT RANGE  -->
      <div class="w-full">
        <p>Change font size</p>
        <div class="wid w-1/2 ">
          <input
            type="range"
            min="16"
            max="24"
            value="{{
              settingsService.configNav().navFontSize.replace('px', '')
            }}"
            class="range"
            step="2"
            (input)="setNavFontSize($event)"
          />
          <div class="w-full flex justify-between text-xs px-2">
            <span>16px</span>
            <span>18px</span>
            <span>20px</span>
            <span>22px</span>
            <span>24px</span>
          </div>
        </div>
      </div>

      <br />
      <!-- TITLE LOGO -->
      <div class="flex items-center gap-2">
        <div class="flex flex-col  gap-2">
          <label class="text-sm">Title and Logo</label>
          <div class="flex justify-center  gap-3">
            <input
              type="text"
              class="input input-bordered mb-3"
              #title
              (input)="settingsService.setConfigNav('title', title.value)"
              [value]="settingsService.configNav().title"
            />
            <div class="flex justify-center gap-3">
              <input
                type="color"
                class="input input-bordered"
                #colorTitle
                (input)="
                  settingsService.setConfigNav('colorTitle', colorTitle.value)
                "
                [value]="settingsService.configNav().colorTitle"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- HOME LINK -->
      <div class="flex items-center gap-2">
        <div class="flex flex-col gap-2 mb-3">
          <label class="text-sm">Home</label>
          <input
            type="text"
            class="input input-bordered"
            #home
            (input)="settingsService.setConfigNav('home', home.value)"
            [value]="settingsService.configNav().home"
          />
        </div>
      </div>

      <!-- OPEN TICKET LINK -->
      <div class="flex items-center gap-2">
        <div class="flex flex-col gap-2">
          <label class="text-sm">Open Ticket</label>
          <input
            type="text"
            class="input input-bordered"
            #openTicket
            (input)="
              settingsService.setConfigNav('openTicket', openTicket.value)
            "
            [value]="settingsService.configNav().openTicket"
          />
        </div>
      </div>
      }

      <h1 class="text-2xl my-6">Job Posting</h1>

      <div>
        <p class="text-lg ">Titles color</p>
        <div class="flex gap-3 ">
          <div
            class="w-12 h-12 cursor-pointer border border-gray-300"
            style="background-color: #1D24CA;"
            (click)="setColorJobTitle('#1D24CA')"
          ></div>
          <div
            class="w-12 h-12 cursor-pointer border border-gray-300"
            style="background-color: #3559E0"
            (click)="setColorJobTitle('#3559E0')"
          ></div>

          <div
            class="w-12 h-12 cursor-pointer border border-gray-300"
            style="background-color: #98ABEE"
            (click)="setColorJobTitle('#98ABEE')"
          ></div>
        </div>
      </div>

      <div>
        <p class="text-lg ">Specifics color</p>
        <div class="flex gap-3 ">
          <div
            class="w-12 h-12 cursor-pointer border border-gray-300"
            style="background-color: #D3D3D3"
            (click)="setColorTitleAttribute('#D3D3D3')"
          ></div>
          <div
            class="w-12 h-12 cursor-pointer border border-gray-300"
            style="background-color: #E8E8E8"
            (click)="setColorTitleAttribute('#E8E8E8')"
          ></div>

          <div
            class="w-12 h-12 cursor-pointer border border-gray-300"
            style="background-color: #FFFFFF"
            (click)="setColorTitleAttribute('#FFFFFF')"
          ></div>
        </div>
      </div>

      <br />
      <!-- TITLE FONT RANGE  -->

      <div class="w-full">
        <p>Change font Title size</p>
        <div class="wid w-1/2 ">
          <input
            type="range"
            min="16"
            max="24"
            value="{{
              settingsService
                .configJobPosting()
                .titleFontSizeRef.replace('px', '')
            }}"
            class="range"
            step="2"
            (input)="setTitleFontSize($event)"
          />
          <div class="w-full flex justify-between text-xs px-2">
            <span>16px</span>
            <span>18px</span>
            <span>20px</span>
            <span>22px</span>
            <span>24px</span>
          </div>
        </div>
      </div>

      <!-- TITLE FONT RANGE  -->

      <div class="w-full">
        <p>Change font attribute size</p>
        <div class="wid w-1/2 ">
          <input
            type="range"
            min="16"
            max="24"
            value="{{
              settingsService
                .configJobPosting()
                .titleAttributeFontSizeRef.replace('px', '')
            }}"
            class="range"
            step="2"
            (input)="setAttributeFontSize($event)"
          />
          <div class="w-full flex justify-between text-xs px-2">
            <span>16px</span>
            <span>18px</span>
            <span>20px</span>
            <span>22px</span>
            <span>24px</span>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
    <div class="flex gap-2">
      <button class="btn btn-primary" (click)="onSaveChanges()">
        Save Changes
      </button>
      <button class="btn btn-error" (click)="onReset()">Reset</button>
    </div>

    <br />
    <br />
    <br />
    <br />

    {{ render() }}
  `,
})
export class EditorComponent {
  render() {
    console.log('render');
  }
  settingsService = inject(SettingsService);

  ngOnInit() {
    this.settingsService.loadConfig();
  }

  setColorNav(color: string) {
    this.settingsService.setConfigNav('navbarColor', color);
  }

  setNavFontSize(event: Event) {
    const target = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const fontSize = target.value;
    this.settingsService.setConfigNav('navFontSize', `${fontSize}px`);
  }

  setColorJobTitle(color: string) {
    this.settingsService.setConfigJob('colorRef', color);
  }

  setColorTitleAttribute(color: string) {
    this.settingsService.setConfigJob('titleAttributeColorRef', color);
  }

  setTitleFontSize(event: Event) {
    const target = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const fontSize = target.value;
    this.settingsService.setConfigJob('titleFontSizeRef', `${fontSize}px`);
  }

  setAttributeFontSize(event: Event) {
    const target = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const fontSize = target.value;
    this.settingsService.setConfigJob(
      'titleAttributeFontSizeRef',
      `${fontSize}px`
    );
  }

  onSaveChanges() {
    this.settingsService.saveConfig();
    alert('Settings saved');
  }

  onReset() {
    this.settingsService.resetConfig();
    alert('Settings reset');
  }
}
