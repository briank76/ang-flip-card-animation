import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-animation-host",
  templateUrl: "./animation-host.component.html",
  styleUrls: ["./animation-host.component.css"],
  animations: [
    trigger("openClose", [
      state(
        "active",
        style({
          transform: "scale(1) rotateY(0deg)",
          'box-shadow': '3px 5px 10px rgb(112, 110, 110)'
        })
      ),
      state(
        "inactive",
        style({
          transform: "scale(0.7) rotateY(-180deg)"
        })
      ),
      transition("active <=> inactive", [animate("500ms")])
    ])
  ]
})
export class AnimationHostComponent implements OnInit {
  public isCardOneOpen = false;
  public isCardTwoOpen = false;
  constructor() {}

  ngOnInit() {}

  public toggleCardOne(): void {
    this.isCardOneOpen = !this.isCardOneOpen;
    this.isCardTwoOpen = false;
  }

  public toggleCardTwo(): void {
    this.isCardOneOpen = false;
    this.isCardTwoOpen = !this.isCardTwoOpen;
  }
}
