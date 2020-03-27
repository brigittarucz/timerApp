import { ViewKeysPipe } from './pipes/view-keys.pipe';
import { MsToTime } from './pipes/milis-to-time.pipe';
import { FormatCountryPipe } from './pipes/format-country.pipe';
import { SecondsFormatterPipe } from './pipes/seconds-formatter.pipe';

export const Pipes = [ ViewKeysPipe, MsToTime, FormatCountryPipe, SecondsFormatterPipe ];
