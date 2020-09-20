import { Component, OnInit } from '@angular/core';
import { SharerService } from '../sharer.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  constructor(private share: SharerService) { }

  ngOnInit(): void {
  }
  onSubmit(data) {
    // this.share.getItem(data);
  }
}
