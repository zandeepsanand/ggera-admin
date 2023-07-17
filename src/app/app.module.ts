import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { PremadeComponent } from './premade/premade.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { ChatComponent } from './chat/chat.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CompletedPremadeOrdersComponent } from './completed-premade-orders/completed-premade-orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CompletedOrderModalComponent } from './completed-order-modal/completed-order-modal.component';
import { InProgressOrderComponent } from './in-progress-order/in-progress-order.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeacialEventsComponent } from './speacial-events/speacial-events.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProPlayerComponent } from './pro-player/pro-player.component';
import { ProPlayerModalComponent } from './pro-player-modal/pro-player-modal.component';
import { ProClientModalComponent } from './pro-client-modal/pro-client-modal.component';
import { TimerModalComponent } from './timer-modal/timer-modal.component';
import { NavbarBlueComponent } from './blue/navbar-blue/navbar-blue.component';
import { RequestBlueComponent } from './blue/request-blue/request-blue.component';
import { ChatBlueComponent } from './blue/chat-blue/chat-blue.component';
import { ReferralBlueComponent } from './blue/referral-blue/referral-blue.component';
import { RanksBlueComponent } from './blue/ranks-blue/ranks-blue.component';
import { TournamentsBlueComponent } from './blue/tournaments-blue/tournaments-blue.component';
import { NewPremadePartyBlueComponent } from './blue/new-premade-party-blue/new-premade-party-blue.component';
import { OnboardPopupModalComponent } from './blue/onboard-popup-modal/onboard-popup-modal.component';
import { InProgressOrdersComponent } from './blue/in-progress-orders/in-progress-orders.component';
import { InProgressOrdersModalComponent } from './blue/in-progress-orders-modal/in-progress-orders-modal.component';
import { ReportModalComponent } from './blue/report-modal/report-modal.component';
import { CompletedOrdersBlueComponent } from './blue/completed-orders-blue/completed-orders-blue.component';
import { WalletTransactionTableBlueComponent } from './blue/wallet-transaction-table-blue/wallet-transaction-table-blue.component';
import { WithdrawMoneyBlueComponent } from './blue/withdraw-money-blue/withdraw-money-blue.component';
import { BankInformationBlueComponent } from './blue/bank-information-blue/bank-information-blue.component';
import { ReviewsModalComponent } from './blue/reviews-modal/reviews-modal.component';
import { StopLobyModalComponent } from './blue/stop-loby-modal/stop-loby-modal.component';
import { SingleChatBlueComponent } from './blue/single-chat-blue/single-chat-blue.component';
import { TruncatePipe } from './truncate.pipe';
import { ChatReportBlueComponent } from './blue/chat-report-blue/chat-report-blue.component';
import { ModalGuideComponent } from './blue/modal-guide/modal-guide.component';
import { EndPremadePartyModalComponent } from './blue/end-premade-party-modal/end-premade-party-modal.component';
import { StarReviewsModalComponent } from './blue/star-reviews-modal/star-reviews-modal.component';
import { SingleInProgresssStartTimerComponent } from './blue/single-in-progresss-start-timer/single-in-progresss-start-timer.component';
import { SingleInProgresssStopTimerComponent } from './blue/single-in-progresss-stop-timer/single-in-progresss-stop-timer.component';
import { OneOneSessionMoreModalComponent } from './blue/one-one-session-more-modal/one-one-session-more-modal.component';
import { OneOneSessionReportModalComponent } from './blue/one-one-session-report-modal/one-one-session-report-modal.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { MakeMeProComponent } from './make-me-pro/make-me-pro.component';
import { SingleChatRedComponent } from './single-chat-red/single-chat-red.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    OtpPageComponent,
    PremadeComponent,
    ChatComponent,
    CompletedOrdersComponent,
    CompletedPremadeOrdersComponent,
    CompletedOrderModalComponent,
    InProgressOrderComponent,
    MyProfileComponent,
    SpeacialEventsComponent,
    WalletComponent,
    ProPlayerComponent,
    ProPlayerModalComponent,
    ProClientModalComponent,
    TimerModalComponent,
    NavbarBlueComponent,
    RequestBlueComponent,
    ChatBlueComponent,
    ReferralBlueComponent,
    RanksBlueComponent,
    TournamentsBlueComponent,
    NewPremadePartyBlueComponent,
    OnboardPopupModalComponent,
    InProgressOrdersComponent,
    InProgressOrdersModalComponent,
    ReportModalComponent,
    CompletedOrdersBlueComponent,
    WalletTransactionTableBlueComponent,
    WithdrawMoneyBlueComponent,
    BankInformationBlueComponent,
    ReviewsModalComponent,
    StopLobyModalComponent,
    SingleChatBlueComponent,
    TruncatePipe,
    ChatReportBlueComponent,
    ModalGuideComponent,
    EndPremadePartyModalComponent,
    StarReviewsModalComponent,
    SingleInProgresssStartTimerComponent,
    SingleInProgresssStopTimerComponent,
    OneOneSessionMoreModalComponent,
    OneOneSessionReportModalComponent,
    AddReviewComponent,
    MakeMeProComponent,
    SingleChatRedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    NgSelectModule ,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
