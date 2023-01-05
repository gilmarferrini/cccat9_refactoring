import Segment from "./Segment";

export default class Ride {
  segments: Segment[];

  NORMAL_FARE = 2.1;
  OVERNIGHT_FARE = 3.9;
  SUNDAY_FARE = 2.9;
  OVERNIGHT_SUNDAY_FARE = 5
  SPECIAL_DAY_FARE = 1.5;
  MIN_FARE = 10;

  constructor () {
    this.segments = [];
  }

  addSegment(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date));
  }

  calculateFare() {
    let fare = 0;
    for (const segment of this.segments) {
      if (segment.isSpecialDay()) {
        fare += segment.distance * this.SPECIAL_DAY_FARE;
        continue;
      }
      if (segment.isOvernight() && !segment.isSunday()) {
        fare += segment.distance * this.OVERNIGHT_FARE;
        continue;
      }
      if (segment.isOvernight() && segment.isSunday()) {
        fare += segment.distance * this.OVERNIGHT_SUNDAY_FARE;
        continue;
      }
      if (!segment.isOvernight() && segment.isSunday()) {
        fare += segment.distance * this.SUNDAY_FARE;
        continue;
      }
      if (!segment.isOvernight() && !segment.isSunday()) {
        fare += segment.distance * this.NORMAL_FARE;
        continue;
      }
      }
      return (fare < this.MIN_FARE) ? this.MIN_FARE : fare;
    }
}