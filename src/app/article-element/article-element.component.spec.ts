import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleElementComponent } from './article-element.component';

describe('ArticleElementComponent', () => {
  let component: ArticleElementComponent;
  let fixture: ComponentFixture<ArticleElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
