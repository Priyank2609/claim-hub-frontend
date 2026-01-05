import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './dashboard/dashboard';
import { PolicyLists } from './policy-lists/policy-lists';
import { PolicyDetail } from './policy-detail/policy-detail';
import { Insurance } from './insurance/insurance';
import { InsuranceDetail } from './insurance-detail/insurance-detail';
import { Quote } from './quote/quote';
import { CustomerDashboard } from './customer-dashboard/customer-dashboard';
import { HeplSection } from './hepl-section/hepl-section';
import { Setting } from './setting/setting';
import { CreatePolicy } from './create-policy/create-policy';
import { CreateClaim } from './create-claim/create-claim';
import { ClaimDetail } from './claim-detail/claim-detail';
import { AssignPolicy } from './assign-policy/assign-policy';
import { RequestPageList } from './request-page-list/request-page-list';
import { Users } from './users/users';
import { UserDetailPage } from './user-detail-page/user-detail-page';
import { ClaimsList } from './claims-list/claims-list';
import { UpdateStatus } from './update-status/update-status';
import { DiscoverPage } from './discover-page/discover-page';
import { WhyUsePolicy } from './why-choose-policy/why-use-policy';
import { TipsPage } from './tips-page/tips-page';
import { TrendPage } from './trend-page/trend-page';
import { PrivacyPage } from './privacy-page/privacy-page';
import { TermsPage } from './terms-page/terms-page';
import { Support } from './support/support';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'policies',
    component: PolicyLists
  },
  {
    path: 'my-dashboard/policy/:id',
    component: PolicyDetail
  },
  {
    path: 'insurance',
    component: Insurance
  },
  {
    path: 'insurance/:type',
    component: InsuranceDetail
  },
  {
    path: 'quote',
    component: Quote
  },
  {
    path: 'my-dashboard',
    component: CustomerDashboard
  },
  {
    path: 'help',
    component: HeplSection

  },
  {
    path: 'settings',
    component: Setting
  },
  {
    path: 'requests/:id/create-policy',
    component: CreatePolicy
  },
  {
    path: 'create-claim',
    component: CreateClaim
  },
  {
    path: 'my-dashboard/claim/:id',
    component: ClaimDetail
  },
  {
    path: 'policies/:id',
    component: AssignPolicy
  },
  {
    path: 'requests',
    component: RequestPageList
  },
  {
    path: 'users',
    component: Users
  },
  {
    path: 'users/:id',
    component: UserDetailPage
  },
  {
    path: 'claims',
    component: ClaimsList
  },
  {
    path: 'claims/:id/update-status',
    component: UpdateStatus
  },
  {
    path: 'discover',
    component: DiscoverPage
  },
  {
    path: 'why-you-choose',
    component: WhyUsePolicy
  },
  {
    path: 'tips',
    component: TipsPage
  },
  {
    path: 'trends',
    component: TrendPage
  },
  {
    path: 'privacy',
    component: PrivacyPage
  },
  {
    path: 'terms',
    component: TermsPage
  },
  {
    path: 'support',
    component: Support
  },





  {
    path: '**',
    component: PageNotFound
  }
];
