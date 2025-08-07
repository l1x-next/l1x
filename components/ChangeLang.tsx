"use client";
import { useState, useTransition } from "react";
import { useParams } from "next/navigation";

import { Locale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Selection,
} from "@heroui/react";

import { cn } from "@/lib/utils";

import { FaEarthAfrica } from "react-icons/fa6";

const ChangeLang = ({ className }: { className?: string }) => {
  const t = useTranslations("ChangeLang");

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = params.locale as Locale;
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set([currentLocale])
  );

  function handleSelectionChange(keys: Selection) {
    const nextLocale = Array.from(keys)[0] as Locale;

    setSelectedKeys(keys);

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className={cn("uppercase", className)}
          variant="solid"
          isLoading={isPending}
          aria-label={t("label")}
        >
          {!isPending && <FaEarthAfrica />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={handleSelectionChange}
      >
        <DropdownItem key="en" textValue="English">
          English
        </DropdownItem>
        <DropdownItem key="ar" textValue="Arabic">
          العربية
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChangeLang;
