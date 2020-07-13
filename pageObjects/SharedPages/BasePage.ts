import { ElementFinder, element, by } from "protractor";

export enum IdentificationType {
  Xpath,
  Css,
  Id,
  Name,
  PartialLinkText,
  ClassName,
  ButtonText
}

export class BasePage {
  ElementLocatorAll(obj) {
    if (obj.type == IdentificationType[IdentificationType.ClassName]) {
      return element.all(by.className(obj.value));
    } else if (obj.type == IdentificationType[IdentificationType.Css]) {
      return element.all(by.css(obj.value));
    } else if (obj.type == IdentificationType[IdentificationType.Id]) {
      return element.all(by.id(obj.value));
    } else if (obj.type == IdentificationType[IdentificationType.Name]) {
      return element.all(by.name(obj.value));
    } else if (
      obj.type == IdentificationType[IdentificationType.PartialLinkText]
    ) {
      return element.all(by.partialLinkText(obj.value));
    }
  }

  ElementLocator(obj) {
    if (obj.type == IdentificationType[IdentificationType.ClassName]) {
      return element(by.className(obj.value));
    } else if (obj.type == IdentificationType[IdentificationType.Css]) {
      return element(by.css(obj.value));
    } else if (obj.type == IdentificationType[IdentificationType.Id]) {
      return element(by.id(obj.value));
    } else if (obj.type == IdentificationType[IdentificationType.Name]) {
      return element(by.name(obj.value));
    } else if (obj.type == IdentificationType[IdentificationType.PartialLinkText]) {
      return element(by.partialLinkText(obj.value));
    } else if (obj.type == IdentificationType[IdentificationType.ButtonText]) {
      return element(by.buttonText(obj.value));
    }
  }
}
