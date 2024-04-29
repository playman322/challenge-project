import { Pipe, PipeTransform } from '@angular/core';
import { Languages, Unspecified } from "../../models/languages.model";

@Pipe({
  name: 'languageMapper',
  standalone: true
})
export class LanguageMapperPipe implements PipeTransform {

  transform(language: string): string {
    return Languages[language as keyof typeof Languages] || Unspecified.None;
  }
}
