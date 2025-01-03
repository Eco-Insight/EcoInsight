import React from "react";
import {
  DefaultValues,
  FieldValues,
  Resolver,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type VerticalFormProps<TFormValues extends FieldValues> = {
  defaultValues?: DefaultValues<TFormValues>;
  resolver?: Resolver<TFormValues>;
  children?: React.ReactNode;
  onSubmit: SubmitHandler<TFormValues>;
  formClass?: string;
};

const VerticalForm = <
  TFormValues extends FieldValues = Record<string, unknown>
>({
  defaultValues,
  resolver,
  children,
  onSubmit,
  formClass,
}: VerticalFormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClass} noValidate>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props && child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                    errors,
                    control,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

export default VerticalForm;
