import { FormControl, FormGroup } from '@angular/forms';
import { FieldFormExtension } from './field-form';
import { FormlyFieldConfig, FormlyFieldConfigCache } from '../../components/formly.field.config';

function buildField(field: FormlyFieldConfig): FormlyFieldConfigCache {
  field = {
    modelOptions: {},
    templateOptions: {},
    parent: { formControl: new FormGroup({}) },
    ...field,
  };

  const extension = new FieldFormExtension();
  extension.onPopulate(field);

  return field;
}

describe('FieldFormExtension', () => {
  let extension: FieldFormExtension;
  beforeEach(() => {
    extension = new FieldFormExtension();
  });

  describe('field', () => {
    it('should create formControl when key exist', () => {
      const field = buildField({ key: 'title' });

      expect(field.formControl instanceof FormControl).toBeTruthy();
    });

    xit('should not create formControl when key is empty', () => {
      const field = buildField({});

      expect(field.formControl).toBeUndefined();
    });
  });

  describe('fieldGroup', () => {
    it('should assign parent formcontrol when key is empty', () => {
      const field = buildField({ fieldGroup: [] });

      expect(field.formControl).toEqual(field.parent.formControl);
    });
  });

  it('should override existing formcontrol when key is empty', () => {
    const field = buildField({
      fieldGroup: [],
      formControl: new FormControl(),
    });

    expect(field.formControl).toEqual(field.parent.formControl);
  });
});
