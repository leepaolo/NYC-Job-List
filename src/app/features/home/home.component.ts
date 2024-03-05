import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NycAPIService } from '../../services/nyc-api.service';
import { IJobList } from '../../models/IJobList.type';
import { Observable } from 'rxjs';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <main class="container mx-auto px-4">
      <h1 class="text-2xl py-4">NYC JOB LIST</h1>

      @for(job of jobs$ | async; track job.job_id){
      <article>
        <h2
          class="text-xl text-blue-400"
          [style.color]="settingsService.colorRef()"
          [style.font-size]="settingsService.titleFontSizeRef()"
        >
          Title:
          <span
            class="text-md text-white"
            [style.color]="settingsService.titleAttributeColorRef()"
            [style.font-size]="settingsService.titleAttributeFontSizeRef()"
            >{{ job.business_title }}</span
          >
        </h2>
        <p
          class="text-md text-blue-400"
          [style.color]="settingsService.colorRef()"
          [style.font-size]="settingsService.titleFontSizeRef()"
        >
          Agency:
          <span
            class="text-md text-white"
            [style.color]="settingsService.titleAttributeColorRef()"
            [style.font-size]="settingsService.titleAttributeFontSizeRef()"
            >{{ job.agency }}</span
          >
        </p>
        <p
          class="text-md text-blue-400"
          [style.color]="settingsService.colorRef()"
          [style.font-size]="settingsService.titleFontSizeRef()"
        >
          Position type:
          <span
            class="text-md text-white"
            [style.color]="settingsService.titleAttributeColorRef()"
            [style.font-size]="settingsService.titleAttributeFontSizeRef()"
            >{{ job.posting_type }}</span
          >
        </p>
        <p
          class="text-md text-blue-400"
          [style.color]="settingsService.colorRef()"
          [style.font-size]="settingsService.titleFontSizeRef()"
        >
          Posting date:
          <span
            class="text-md text-white"
            [style.color]="settingsService.titleAttributeColorRef()"
            [style.font-size]="settingsService.titleAttributeFontSizeRef()"
            >{{ job.posting_date | date : 'yyyy-MM-dd' }}</span
          >
        </p>
        <p
          class="text-md text-blue-400"
          [style.color]="settingsService.colorRef()"
          [style.font-size]="settingsService.titleFontSizeRef()"
        >
          Last Update:
          <span
            class="text-md text-white"
            [style.color]="settingsService.titleAttributeColorRef()"
            [style.font-size]="settingsService.titleAttributeFontSizeRef()"
            >{{ job.posting_updated | date : 'yyyy-MM-dd' }}</span
          >
        </p>
        <p
          class="text-md text-blue-400"
          [style.color]="settingsService.colorRef()"
          [style.font-size]="settingsService.titleFontSizeRef()"
        >
          Work location:
          <span
            class="text-md text-white"
            [style.color]="settingsService.titleAttributeColorRef()"
            [style.font-size]="settingsService.titleAttributeFontSizeRef()"
            >{{ job.work_location }}</span
          >
        </p>
        <br />
        <p
          class="text-md text-blue-400"
          [style.color]="settingsService.colorRef()"
          [style.font-size]="settingsService.titleFontSizeRef()"
        >
          Job Description:
          <span
            class="text-md text-white"
            [style.color]="settingsService.titleAttributeColorRef()"
            [style.font-size]="settingsService.titleAttributeFontSizeRef()"
            >{{ job.job_description }}</span
          >
        </p>
        <br />
        <p
          class="text-md text-blue-400"
          [style.color]="settingsService.colorRef()"
          [style.font-size]="settingsService.titleFontSizeRef()"
        >
          Salary Range from:
          <span
            class="text-md text-white"
            [style.color]="settingsService.titleAttributeColorRef()"
            [style.font-size]="settingsService.titleAttributeFontSizeRef()"
            >$ {{ job.salary_range_from }}</span
          >
        </p>
        <p
          class="text-blue-400"
          [style.color]="settingsService.colorRef()"
          [style.font-size]="settingsService.titleFontSizeRef()"
        >
          Salary Range to:
          <span
            class="text-md text-white"
            [style.color]="settingsService.titleAttributeColorRef()"
            [style.font-size]="settingsService.titleAttributeFontSizeRef()"
            >$ {{ job.salary_range_to }}</span
          >
        </p>
        <!-- <p class="text-blue-400">
        <button class="btn btn-primary">Send CV</button>
      </p> -->
        <br />
        <hr />
        <br />
      </article>

      }
    </main>

    <!-- <pre>{{ jobs[0].business_title | json }}</pre> -->
  `,
})
export default class HomeComponent {
  settingsService = inject(SettingsService);

  jobs$: Observable<IJobList[]>;

  constructor(private nycAPIService: NycAPIService) {
    this.jobs$ = this.nycAPIService.getJobListings();
  }
}
