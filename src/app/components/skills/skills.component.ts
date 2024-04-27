import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: true,
    imports: [NgFor, MatProgressBarModule]
})
export class SkillsComponent implements OnInit{
  ngAfterViewInit():void {
    this.skills.forEach(skill => {
      if (skill.InitProgress < skill.Progress) {
        this.progressBarAnimation(skill)
      }
    });
  }
  ngOnInit(): void {
  }
  public skills : any[] =
  [
      {
        Name : 'C#',
        InitProgress : 0,
        Progress : 100
      },
      {
        Name : '.NET',
        InitProgress : 0,
        Progress : 100
      },
      {
        Name : 'SQL',
        InitProgress : 0,
        Progress : 100
      },
      {
        Name : 'JS',
        InitProgress : 0,
        Progress : 80
      },
      {
        Name : 'DOCKER',
        InitProgress : 0,
        Progress : 55
      },
      {
        Name : 'ELASTIC',
        InitProgress : 0,
        Progress : 40
      },
      {
        Name : 'REDIS',
        InitProgress : 0,
        Progress : 45
      },
      {
        Name : 'ANGULAR',
        InitProgress : 0,
        Progress : 80
      }
  ];

  progressBarAnimation(skill : any) {
    setInterval(() => this.progressBar(skill),1);
  }

  progressBar(skill : any) {
    if (skill.InitProgress == 0) {
      skill.InitProgress = skill.InitProgress + 1;
    }
    else if (skill.InitProgress + 1 > skill.Progress) {
      skill.InitProgress == skill.Progress;
    }
    else {
      skill.InitProgress = skill.InitProgress + 1;
    }
  }
}
