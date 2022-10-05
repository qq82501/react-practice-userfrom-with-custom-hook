# React pracatice of Form with custom Hooks

When talk on form, there are many input filed inside it.
when we submit a form, it's important to validate all of input before submit to response users about invalid input in time.

Here is 3 ways to validate input.

1. validate input while submiting form.

   - pro: save resource because we only validate once when submitting.
   - con: quite late to let user know the value is invalid.

2. validata input while input lost its focus.

   - pro: save resource because we only validate once when changing focus
   - con: a little bit late to let user know the value is invalid.

3. validate input on every keystroke
   - pro: user can immediately know input value is valid or not.
   - con: every keystroke will trigger validation, cost resource.

Basically, a complete process to deal with getting value, validation, set value with a input filed required few state involved (typedValue, isTouch...) and some variable (isTypeValueValid, hasError...). if we build set of above states and variable for each input, we will get very messy and dupilicated code. To clean up code, we can use Custom hooks to organize these states, variables also some handler function.

Formik is third-party library to help us cope with form more easily.
https://formik.org/
