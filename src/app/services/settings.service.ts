import { Injectable, computed, signal } from '@angular/core';

// Define your configuration types
type ConfigNav = {
  enableNavBar: boolean;
  navbarColor: string;
  navFontSize: string;
  title: string;
  colorTitle: string;
  enableTitle: boolean;
  home: string;
  settings: string;
  openTicket: string;
};

type ConfigJobPosting = {
  colorRef: string;
  titleAttributeColorRef: string;
  titleFontSizeRef: string;
  titleAttributeFontSizeRef: string;
  businessTitle: string;
  agency: string;
  postingType: string;
  postingDate: string;
  postingUpdated: string;
  workLocation: string;
  postingDescription: string;
  salaryRangeFrom: number;
  salaryRangeTo: number;
  colorBody: string;
  fontSizeBody: string;
};

// Default configurations
const DEFAULT_NAV_CONFIG: ConfigNav = {
  enableNavBar: true,
  navbarColor: '#FFF',
  navFontSize: '16px',
  title: 'NYC Job Listings',
  colorTitle: '#FFF',
  enableTitle: true,
  home: 'Home',
  settings: 'Settings',
  openTicket: 'Open Ticket',
};

const DEFAULT_JOB_POSTING_CONFIG: ConfigJobPosting = {
  colorRef: 'FFF',
  titleAttributeColorRef: 'FFF',
  titleFontSizeRef: '16px',
  titleAttributeFontSizeRef: '16px',
  businessTitle: 'Your Business title',
  agency: 'Agency Name',
  postingType: 'Posting Type',
  postingDate: formatDate(new Date()),
  postingUpdated: formatDate(new Date()),
  workLocation: 'Work Location',
  postingDescription: 'Posting Description',
  salaryRangeFrom: 50000,
  salaryRangeTo: 100000,
  colorBody: 'FFF',
  fontSizeBody: '16px',
};
// FORMAT DATE
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  configNav = signal(DEFAULT_NAV_CONFIG);
  configJobPosting = signal(DEFAULT_JOB_POSTING_CONFIG);

  // NAVBAR CONFIG
  isNavbarEnable = computed(() => this.configNav().enableNavBar);
  navbarColor = computed(() => this.configNav().navbarColor);
  navbarFontSize = computed(() => this.configNav().navFontSize);

  title = computed(() => this.configNav().title);
  colorTitle = computed(() => this.configNav().colorTitle);

  home = computed(() => this.configNav().home);
  settings = computed(() => this.configNav().settings);
  openTicket = computed(() => this.configNav().openTicket);

  setConfigNav(propName: keyof ConfigNav, value: any) {
    this.configNav.update((cfg) => ({ ...cfg, [propName]: value }));
  }

  // JOB POSTING CONFIG

  colorRef = computed(() => this.configJobPosting().colorRef);
  titleAttributeColorRef = computed(
    () => this.configJobPosting().titleAttributeColorRef
  );
  titleFontSizeRef = computed(() => this.configJobPosting().titleFontSizeRef);
  titleAttributeFontSizeRef = computed(
    () => this.configJobPosting().titleAttributeFontSizeRef
  );
  businessTitle = computed(() => this.configJobPosting().businessTitle);
  agency = computed(() => this.configJobPosting().agency);
  postingType = computed(() => this.configJobPosting().postingType);
  postingDate = computed(() => this.configJobPosting().postingDate);
  postingUpdated = computed(() => this.configJobPosting().postingUpdated);
  workLocation = computed(() => this.configJobPosting().workLocation);
  postingDescription = computed(
    () => this.configJobPosting().postingDescription
  );
  salaryRangeFrom = computed(() => this.configJobPosting().salaryRangeFrom);
  salaryRangeTo = computed(() => this.configJobPosting().salaryRangeTo);
  colorBody = computed(() => this.configJobPosting().colorBody);
  fontSizeBody = computed(() => this.configJobPosting().fontSizeBody);

  setConfigJob(propName: keyof ConfigJobPosting, value: any) {
    this.configJobPosting.update((cfg) => ({ ...cfg, [propName]: value }));
  }

  // SAVE CHANGES TO LOCAL STORAGE

  saveConfig() {
    const navConfig = this.configNav();
    const jobConfig = this.configJobPosting();
    localStorage.setItem('navConfig', JSON.stringify(navConfig));
    localStorage.setItem('jobConfig', JSON.stringify(jobConfig));
  }

  // RESET CONFIG METHOD | SAVE TO LOCAL STORAGE
  resetConfig() {
    // Reset the configurations to their default states
    this.configNav.update(() => ({ ...DEFAULT_NAV_CONFIG }));
    this.configJobPosting.update(() => ({ ...DEFAULT_JOB_POSTING_CONFIG }));

    this.saveConfig();
  }

  loadConfig() {
    const navConfig = localStorage.getItem('navConfig');
    const jobConfig = localStorage.getItem('jobConfig');
    if (navConfig) {
      this.configNav.update((cfg) => ({ ...cfg, ...JSON.parse(navConfig) }));
    }

    if (jobConfig) {
      this.configJobPosting.update((cfg) => ({
        ...cfg,
        ...JSON.parse(jobConfig),
      }));
    }
  }
}
