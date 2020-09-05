import { NgModule } from '@angular/core';

import {PurchaseOrderComponent} from './purchase-order.component';
import {SharedModule} from '../../shared';
import {PurchaseOrderRouting} from './purchase-order.routing';

@NgModule({
 imports: [
   SharedModule,
   PurchaseOrderRouting
 ],
 declarations: [PurchaseOrderComponent]
})
export class PurchaseOrderModule { }
