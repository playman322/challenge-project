import { LanguageMapperPipe } from './language-mapper.pipe';
import { Unspecified } from "../../models/languages.model";

describe('LanguageMapperPipe', () => {
  let pipe: LanguageMapperPipe;

  beforeEach(() => {
    pipe = new LanguageMapperPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return specified language', () => {
    expect(pipe.transform('fr')).toEqual('French');
    expect(pipe.transform('ms')).toEqual('Malay');
    expect(pipe.transform('uk')).toEqual('Ukrainian');
    expect(pipe.transform('tr')).toEqual('Turkish');
  });

  it('should return unspecified language', () => {
    expect(pipe.transform('UnknownLanguage')).toEqual(Unspecified.None);
  });
});
