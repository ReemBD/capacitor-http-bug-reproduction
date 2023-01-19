import { Component } from '@angular/core';
import { data, Map, AuthenticationType } from 'azure-maps-control';

const AzureMapElementId: string = 'azure-map-container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'capacitor-native-plugin-bug-code-repro';
  map: Map | undefined;
  public constructor() {
  }

  public ngOnInit() {
    this.createMap();
  }

  private createMap(): void {
    this.map = new Map(AzureMapElementId, {
      showFeedbackLink: false,
      autoResize: true,
      refreshExpiredTiles: true,
      showBuildingModels: true,
      showLogo: false,
      style: 'road',
      zoom: 7,
      center: new data.Position(13, 12),
      authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: 'this.sessionStorage.get(AzureMapKey)',
      },
    });

    // this.addMapEvents();
  }

}
