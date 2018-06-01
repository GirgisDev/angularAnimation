import { Component, Input } from '@angular/core';

interface PanelContent {
  heading: string,
  body: any[]
}

@Component({
  selector: 'app-bootstrap-panel',
  templateUrl: './bootstrap-panel.component.html',
  styleUrls: ['./bootstrap-panel.component.css']
})
export class BootstrapPanelComponent {
  @Input('panelContent') panelContent: PanelContent;
}
