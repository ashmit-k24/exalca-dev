"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Field, FieldLabel, FieldError, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { ChevronDown } from "lucide-react";

interface FormItemProps {
    label?: string;
    description?: string;
    error?: string;
    required?: boolean;
    className?: string;
    children: React.ReactNode;
}

const FormItem = ({
    label,
    description,
    error,
    required,
    className,
    children,
}: FormItemProps) => {
    return (
        <Field className={cn("w-full", className)}>
            {label && (
                <FieldLabel className="text-[14px] font-medium text-[#0B0B0B]">
                    {label} {required && <span className="text-red-500">*</span>}
                </FieldLabel>
            )}
            {children}
            {description && <FieldDescription>{description}</FieldDescription>}
            {error && <FieldError>{error}</FieldError>}
        </Field>
    );
};

export interface FormInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    description?: string;
    error?: string;
    containerClassName?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
    ({ label, description, error, required, containerClassName, className, ...props }, ref) => {
        return (
            <FormItem
                label={label}
                description={description}
                error={error}
                required={required}
                className={containerClassName}
            >
                <Input
                    ref={ref}
                    className={cn(
                        "h-[48px] border-[#98A2B3] bg-white px-4 py-3 text-[14px] text-foreground placeholder:text-[#99A0AE] focus:border-primary focus:ring-0",
                        className
                    )}
                    {...props}
                />
            </FormItem>
        );
    }
);
FormInput.displayName = "FormInput";

export interface FormTextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    description?: string;
    error?: string;
    containerClassName?: string;
}

export const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
    ({ label, description, error, required, containerClassName, className, ...props }, ref) => {
        return (
            <FormItem
                label={label}
                description={description}
                error={error}
                required={required}
                className={containerClassName}
            >
                <Textarea
                    ref={ref}
                    className={cn(
                        "min-h-[120px] border-[#D1D5DB] bg-white px-4 py-3 text-[14px] text-[#0B0B0B] placeholder:text-[#9CA3AF] focus:border-primary focus:ring-0",
                        className
                    )}
                    {...props}
                />
            </FormItem>
        );
    }
);
FormTextArea.displayName = "FormTextArea";

export interface FormSelectProps {
    label?: string;
    description?: string;
    error?: string;
    required?: boolean;
    placeholder?: string;
    options: { label: string; value: string }[];
    containerClassName?: string;
    className?: string;
    onValueChange?: (value: string) => void;
    value?: string;
}

export const FormSelect = ({
    label,
    description,
    error,
    required,
    placeholder,
    options,
    containerClassName,
    className,
    onValueChange,
    value,
}: FormSelectProps) => {
    return (
        <FormItem
            label={label}
            description={description}
            error={error}
            required={required}
            className={containerClassName}
        >
            <Select onValueChange={onValueChange} value={value}>
                <SelectTrigger
                    className={cn(
                        "h-[48px]! border-[#98A2B3] bg-white px-4 py-3 text-[14px] text-foreground placeholder:text-[#99A0AE] focus:border-primary focus:ring-0",
                        className
                    )}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#98A2B3] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]">
                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            className="focus:bg-[#F2F4F7] focus:text-foreground py-2.5 cursor-pointer"
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </FormItem>
    );
};

export interface FormCheckboxProps {
    label: React.ReactNode;
    description?: string;
    error?: string;
    required?: boolean;
    containerClassName?: string;
    className?: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}

export const FormCheckbox = ({
    label,
    description,
    error,
    required,
    containerClassName,
    className,
    checked,
    onCheckedChange,
}: FormCheckboxProps) => {
    return (
        <div className={cn("flex flex-col gap-2", containerClassName)}>
            <div className="flex items-start gap-3">
                <Checkbox
                    id="terms"
                    checked={checked}
                    onCheckedChange={onCheckedChange}
                    className={cn("mt-1 h-5 w-5 rounded-[4px] border-[#D1D5DB]", className)}
                />
                <label
                    htmlFor="terms"
                    className="text-[14px] leading-relaxed text-[#666666]"
                >
                    {label}
                </label>
            </div>
            {description && <p className="text-xs text-muted-foreground ml-8">{description}</p>}
            {error && <p className="text-xs text-red-500 ml-8">{error}</p>}
        </div>
    );
};

export interface FormPhoneInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    description?: string;
    error?: string;
    containerClassName?: string;
    countryCode?: string;
    onCountryCodeChange?: (code: string) => void;
}

export const FormPhoneInput = React.forwardRef<HTMLInputElement, FormPhoneInputProps>(
    ({ label, description, error, required, containerClassName, className, countryCode = "+91", ...props }, ref) => {
        return (
            <FormItem
                label={label}
                description={description}
                error={error}
                required={required}
                className={containerClassName}
            >
                <InputGroup className="h-[50px] border-[#D1D5DB] focus-within:border-primary">
                    <InputGroupAddon className="border-r border-[#D1D5DB] px-3 bg-white">
                        <button type="button" className="flex items-center gap-1 text-[14px] text-[#0B0B0B]">
                            {countryCode} <ChevronDown className="h-4 w-4 text-[#9CA3AF]" />
                        </button>
                    </InputGroupAddon>
                    <InputGroupInput
                        ref={ref}
                        className={cn(
                            "text-[14px] text-[#0B0B0B] placeholder:text-[#9CA3AF]",
                            className
                        )}
                        {...props}
                    />
                </InputGroup>
            </FormItem>
        );
    }
);
FormPhoneInput.displayName = "FormPhoneInput";

export const FormWrapper = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "rounded-[16px] border border-border p-2",
                className
            )}
        >
            <div className="rounded-[12px] border border-border bg-white p-6 shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)] md:p-10">
                {children}
            </div>
        </div>
    );
};
