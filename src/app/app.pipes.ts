import { ViewKeysPipe } from './pipes/view-keys.pipe';
import { MsToTime } from './pipes/milis-to-time.pipe';
import { FormatCountryPipe } from './pipes/format-country.pipe';
import { SecondsFormatterPipe } from './pipes/seconds-formatter.pipe';
import {SecondsConverterPipe} from "./pipes/seconds-converter.pipe";
import {TaskOptionFormatterPipe} from "./pipes/task-option-formatter.pipe";
import {MinutesToTimePipe} from "./pipes/minutes-to-time.pipe";

export const Pipes = [
  ViewKeysPipe, MsToTime, FormatCountryPipe, SecondsFormatterPipe,		SecondsConverterPipe,
  TaskOptionFormatterPipe,
  FormatCountryPipe,
  MinutesToTimePipe,

];
