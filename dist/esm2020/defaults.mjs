import { SECONDARY_PLACEHOLDER, PLACEHOLDER } from './core/constants/index';
export const defaults = {
    tagInput: {
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: '250ms',
            leave: '150ms'
        }
    },
    dropdown: {
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn
    }
};
/**
 * @name matchingFn
 * @param this
 * @param value
 * @param target
 */
function matchingFn(value, target) {
    const targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL2RlZmF1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQTBENUUsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3BCLFFBQVEsRUFBbUI7UUFDdkIsYUFBYSxFQUFFLEVBQUU7UUFDakIsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsV0FBVztRQUN4QixvQkFBb0IsRUFBRSxxQkFBcUI7UUFDM0MsVUFBVSxFQUFFLEVBQUU7UUFDZCxlQUFlLEVBQUUsRUFBRTtRQUNuQixvQkFBb0IsRUFBRSxLQUFLO1FBQzNCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLEtBQUssRUFBRSxFQUFFO1FBQ1Qsb0JBQW9CLEVBQUUsR0FBRztRQUN6QixPQUFPLEVBQUUsSUFBSTtRQUNiLFVBQVUsRUFBRSxFQUFFO1FBQ2QsV0FBVyxFQUFFLEtBQUs7UUFDbEIsUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixpQkFBaUIsRUFBRSxHQUFHO1FBQ3RCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixVQUFVLEVBQUUsS0FBSztRQUNqQixjQUFjLEVBQUUsS0FBSztRQUNyQixRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsS0FBSztRQUNkLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLFNBQVM7UUFDckIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsVUFBVSxFQUFFLE9BQU87UUFDbkIsaUJBQWlCLEVBQUU7WUFDZixLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBRSxPQUFPO1NBQ2pCO0tBQ0o7SUFDRCxRQUFRLEVBQTJCO1FBQy9CLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFlBQVksRUFBRSxJQUFJO1FBQ2xCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsaUJBQWlCLEVBQUUsS0FBSztRQUN4QixtQkFBbUIsRUFBRSxLQUFLO1FBQzFCLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsWUFBWSxFQUFFLFFBQVE7UUFDdEIsUUFBUSxFQUFFLElBQUk7UUFDZCxhQUFhLEVBQUUsSUFBSTtRQUNuQixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVU7S0FDYjtDQUNKLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILFNBQVMsVUFBVSxDQUF5QixLQUFhLEVBQUUsTUFBZ0I7SUFDdkUsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUV0RCxPQUFPLFdBQVcsSUFBSSxXQUFXO1NBQzVCLFdBQVcsRUFBRTtTQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFZhbGlkYXRvckZuLCBBc3luY1ZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTRUNPTkRBUllfUExBQ0VIT0xERVIsIFBMQUNFSE9MREVSIH0gZnJvbSAnLi9jb3JlL2NvbnN0YW50cy9pbmRleCc7XG5pbXBvcnQgeyBUYWdJbnB1dERyb3Bkb3duIH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnTW9kZWwgfSBmcm9tICcuL2NvcmUvdGFnLW1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWdJbnB1dE9wdGlvbnMge1xuICAgIHNlcGFyYXRvcktleXM6IHN0cmluZ1tdO1xuICAgIHNlcGFyYXRvcktleUNvZGVzOiBudW1iZXJbXTtcbiAgICBtYXhJdGVtczogbnVtYmVyO1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdO1xuICAgIGFzeW5jVmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbltdO1xuICAgIG9ubHlGcm9tQXV0b2NvbXBsZXRlOiBib29sZWFuO1xuICAgIGVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xuICAgIHRoZW1lOiAnJztcbiAgICBvblRleHRDaGFuZ2VEZWJvdW5jZTogbnVtYmVyO1xuICAgIGlucHV0SWQ6IHN0cmluZyB8IG51bGw7XG4gICAgaW5wdXRDbGFzczogc3RyaW5nO1xuICAgIGNsZWFyT25CbHVyOiBib29sZWFuO1xuICAgIGhpZGVGb3JtOiBib29sZWFuO1xuICAgIGFkZE9uQmx1cjogYm9vbGVhbjtcbiAgICBhZGRPblBhc3RlOiBib29sZWFuO1xuICAgIHBhc3RlU3BsaXRQYXR0ZXJuOiBzdHJpbmcgfCBSZWdFeHA7XG4gICAgYmxpbmtJZkR1cGU6IGJvb2xlYW47XG4gICAgcmVtb3ZhYmxlOiBib29sZWFuO1xuICAgIGVkaXRhYmxlOiBib29sZWFuO1xuICAgIGFsbG93RHVwZXM6IGJvb2xlYW47XG4gICAgbW9kZWxBc1N0cmluZ3M6IGJvb2xlYW47XG4gICAgdHJpbVRhZ3M6IGJvb2xlYW47XG4gICAgcmlwcGxlOiBib29sZWFuO1xuICAgIHRhYkluZGV4OiBzdHJpbmc7XG4gICAgZGlzYWJsZTogYm9vbGVhbjtcbiAgICBkcmFnWm9uZTogc3RyaW5nO1xuICAgIG9uUmVtb3Zpbmc/OiAodGFnOiBUYWdNb2RlbCkgPT4gT2JzZXJ2YWJsZTxUYWdNb2RlbD47XG4gICAgb25BZGRpbmc/OiAodGFnOiBUYWdNb2RlbCkgPT4gT2JzZXJ2YWJsZTxUYWdNb2RlbD47XG4gICAgZGlzcGxheUJ5OiBzdHJpbmc7XG4gICAgaWRlbnRpZnlCeTogc3RyaW5nO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7XG4gICAgICAgIGVudGVyOiBzdHJpbmcsXG4gICAgICAgIGxlYXZlOiBzdHJpbmdcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ0lucHV0RHJvcGRvd25PcHRpb25zIHtcbiAgICBkaXNwbGF5Qnk6IHN0cmluZztcbiAgICBpZGVudGlmeUJ5OiBzdHJpbmc7XG4gICAgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICAgIG9mZnNldDogc3RyaW5nO1xuICAgIGZvY3VzRmlyc3RFbGVtZW50OiBib29sZWFuO1xuICAgIHNob3dEcm9wZG93bklmRW1wdHk6IGJvb2xlYW47XG4gICAgbWluaW11bVRleHRMZW5ndGg6IG51bWJlcjtcbiAgICBsaW1pdEl0ZW1zVG86IG51bWJlcjtcbiAgICBrZWVwT3BlbjogYm9vbGVhbjtcbiAgICB6SW5kZXg6IG51bWJlcjtcbiAgICBkeW5hbWljVXBkYXRlOiBib29sZWFuO1xuICAgIG1hdGNoaW5nRm46ICh2YWx1ZTogc3RyaW5nLCB0YXJnZXQ6IFRhZ01vZGVsKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgdGFnSW5wdXQ6IDxUYWdJbnB1dE9wdGlvbnM+e1xuICAgICAgICBzZXBhcmF0b3JLZXlzOiBbXSxcbiAgICAgICAgc2VwYXJhdG9yS2V5Q29kZXM6IFtdLFxuICAgICAgICBtYXhJdGVtczogSW5maW5pdHksXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQTEFDRUhPTERFUixcbiAgICAgICAgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6IFNFQ09OREFSWV9QTEFDRUhPTERFUixcbiAgICAgICAgdmFsaWRhdG9yczogW10sXG4gICAgICAgIGFzeW5jVmFsaWRhdG9yczogW10sXG4gICAgICAgIG9ubHlGcm9tQXV0b2NvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlczoge30sXG4gICAgICAgIHRoZW1lOiAnJyxcbiAgICAgICAgb25UZXh0Q2hhbmdlRGVib3VuY2U6IDI1MCxcbiAgICAgICAgaW5wdXRJZDogbnVsbCxcbiAgICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICAgIGNsZWFyT25CbHVyOiBmYWxzZSxcbiAgICAgICAgaGlkZUZvcm06IGZhbHNlLFxuICAgICAgICBhZGRPbkJsdXI6IGZhbHNlLFxuICAgICAgICBhZGRPblBhc3RlOiBmYWxzZSxcbiAgICAgICAgcGFzdGVTcGxpdFBhdHRlcm46ICcsJyxcbiAgICAgICAgYmxpbmtJZkR1cGU6IHRydWUsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZSxcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICBhbGxvd0R1cGVzOiBmYWxzZSxcbiAgICAgICAgbW9kZWxBc1N0cmluZ3M6IGZhbHNlLFxuICAgICAgICB0cmltVGFnczogdHJ1ZSxcbiAgICAgICAgcmlwcGxlOiB0cnVlLFxuICAgICAgICB0YWJJbmRleDogJycsXG4gICAgICAgIGRpc2FibGU6IGZhbHNlLFxuICAgICAgICBkcmFnWm9uZTogJycsXG4gICAgICAgIG9uUmVtb3Zpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgb25BZGRpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgZGlzcGxheUJ5OiAnZGlzcGxheScsXG4gICAgICAgIGlkZW50aWZ5Qnk6ICd2YWx1ZScsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7XG4gICAgICAgICAgICBlbnRlcjogJzI1MG1zJyxcbiAgICAgICAgICAgIGxlYXZlOiAnMTUwbXMnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRyb3Bkb3duOiA8VGFnSW5wdXREcm9wZG93bk9wdGlvbnM+e1xuICAgICAgICBkaXNwbGF5Qnk6ICdkaXNwbGF5JyxcbiAgICAgICAgaWRlbnRpZnlCeTogJ3ZhbHVlJyxcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0cnVlLFxuICAgICAgICBvZmZzZXQ6ICc1MCAwJyxcbiAgICAgICAgZm9jdXNGaXJzdEVsZW1lbnQ6IGZhbHNlLFxuICAgICAgICBzaG93RHJvcGRvd25JZkVtcHR5OiBmYWxzZSxcbiAgICAgICAgbWluaW11bVRleHRMZW5ndGg6IDEsXG4gICAgICAgIGxpbWl0SXRlbXNUbzogSW5maW5pdHksXG4gICAgICAgIGtlZXBPcGVuOiB0cnVlLFxuICAgICAgICBkeW5hbWljVXBkYXRlOiB0cnVlLFxuICAgICAgICB6SW5kZXg6IDEwMDAsXG4gICAgICAgIG1hdGNoaW5nRm5cbiAgICB9XG59O1xuXG4vKipcbiAqIEBuYW1lIG1hdGNoaW5nRm5cbiAqIEBwYXJhbSB0aGlzXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSB0YXJnZXRcbiAqL1xuZnVuY3Rpb24gbWF0Y2hpbmdGbih0aGlzOiBUYWdJbnB1dERyb3Bkb3duLCB2YWx1ZTogc3RyaW5nLCB0YXJnZXQ6IFRhZ01vZGVsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRbdGhpcy5kaXNwbGF5QnldLnRvU3RyaW5nKCk7XG5cbiAgICByZXR1cm4gdGFyZ2V0VmFsdWUgJiYgdGFyZ2V0VmFsdWVcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPj0gMDtcbn1cbiJdfQ==