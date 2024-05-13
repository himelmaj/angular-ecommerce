import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NavbarComponent } from './shared/components/header/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './core/modules/home/pages/homepage/homepage.component';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HlmToasterComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    HomepageComponent,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
