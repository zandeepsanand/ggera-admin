import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PremadeComponent } from './premade/premade.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { ChatComponent } from './chat/chat.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { CompletedPremadeOrdersComponent } from './completed-premade-orders/completed-premade-orders.component';
import { InProgressOrderComponent } from './in-progress-order/in-progress-order.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SpeacialEventsComponent } from './speacial-events/speacial-events.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProPlayerComponent } from './pro-player/pro-player.component';
import { RequestBlueComponent } from './blue/request-blue/request-blue.component';
import { ChatBlueComponent } from './blue/chat-blue/chat-blue.component';
import { ReferralBlueComponent } from './blue/referral-blue/referral-blue.component';
import { RanksBlueComponent } from './blue/ranks-blue/ranks-blue.component';
import { TournamentsBlueComponent } from './blue/tournaments-blue/tournaments-blue.component';
import { NewPremadePartyBlueComponent } from './blue/new-premade-party-blue/new-premade-party-blue.component';
import { InProgressOrdersComponent } from './blue/in-progress-orders/in-progress-orders.component';
import { CompletedOrdersBlueComponent } from './blue/completed-orders-blue/completed-orders-blue.component';
import { WalletTransactionTableBlueComponent } from './blue/wallet-transaction-table-blue/wallet-transaction-table-blue.component';
import { WithdrawMoneyBlueComponent } from './blue/withdraw-money-blue/withdraw-money-blue.component';
import { BankInformationBlueComponent } from './blue/bank-information-blue/bank-information-blue.component';
import { SingleChatBlueComponent } from './blue/single-chat-blue/single-chat-blue.component';
import { ChatReportBlueComponent } from './blue/chat-report-blue/chat-report-blue.component';
import { ModalGuideComponent } from './blue/modal-guide/modal-guide.component';
import { SingleInProgresssStartTimerComponent } from './blue/single-in-progresss-start-timer/single-in-progresss-start-timer.component';
import { SingleInProgresssStopTimerComponent } from './blue/single-in-progresss-stop-timer/single-in-progresss-stop-timer.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { MakeMeProComponent } from './make-me-pro/make-me-pro.component';
import { SingleChatRedComponent } from './single-chat-red/single-chat-red.component';

const routes: Routes = [
  { path: 'index',  component: LoginComponent },
  { path: 'orders',  component: CompletedOrdersComponent },
  { path: 'otp',  component: OtpPageComponent },
  { path: 'premade',  component: PremadeComponent },
  { path: 'chat',  component: ChatComponent },
  { path: 'premade-orders',  component: CompletedPremadeOrdersComponent },
  { path: 'in-progress',  component: InProgressOrderComponent },
  { path: 'my-profile',  component: MyProfileComponent },
  { path: 'speacial-events',  component: SpeacialEventsComponent},
  { path: 'wallet',  component: WalletComponent},
  { path: 'pro-player',  component: ProPlayerComponent},
  { path: 'request-blue',  component: RequestBlueComponent},
  { path: 'chat-blue',  component: ChatBlueComponent},
  { path: 'referral-blue',  component: ReferralBlueComponent},
  { path: 'ranks-blue',  component: RanksBlueComponent},
  { path: 'tournaments-blue',  component: TournamentsBlueComponent},
  { path: 'newpremade-blue',  component: NewPremadePartyBlueComponent},
  { path: '1-1orders',  component: InProgressOrdersComponent},
  { path: 'orders-blue',  component: CompletedOrdersBlueComponent},
  { path: 'wallet-transaction',  component: WalletTransactionTableBlueComponent},
  { path: 'withdraw-money',  component: WithdrawMoneyBlueComponent},
  { path: 'bank-information',  component: BankInformationBlueComponent},
  { path: 'single-chat',  component: SingleChatBlueComponent},
  { path: 'chat-report-blue',  component: ChatReportBlueComponent},
  { path: 'modals',  component: ModalGuideComponent},
  { path: 'single-start-timer',  component: SingleInProgresssStartTimerComponent},
  { path: 'single-stop-timer',  component: SingleInProgresssStopTimerComponent},
  { path: 'add-review',  component: AddReviewComponent},
  { path: 'make-me-pro',  component: MakeMeProComponent},
  { path: 'single-chat-red',  component: SingleChatRedComponent},
  { path: '', redirectTo:'index',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
