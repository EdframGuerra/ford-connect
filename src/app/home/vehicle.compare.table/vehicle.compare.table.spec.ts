import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCompareTable } from './vehicle.compare.table';

describe('VehicleCompareTable', () => {
  let component: VehicleCompareTable;
  let fixture: ComponentFixture<VehicleCompareTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleCompareTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCompareTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
