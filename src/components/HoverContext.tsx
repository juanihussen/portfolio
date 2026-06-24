"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type HoverSection = "about" | "projects" | "blog" | "social" | null;

type ItemHover = {
  type: "project" | "social" | "experience";
  description: string;
} | null;

export type DetailItem = {
  type: "project" | "blog" | "experience";
  title: string;
  description: string;
  tags?: string[];
  date?: string;
  read?: string;
  content?: string;
  image?: string;
  url?: string;
} | null;

interface HoverContextType {
  hovered: HoverSection;
  setHovered: (section: HoverSection) => void;
  itemHover: ItemHover;
  setItemHover: (item: ItemHover) => void;
  detailItem: DetailItem;
  setDetailItem: (item: DetailItem) => void;
}

const HoverContext = createContext<HoverContextType>({
  hovered: null,
  setHovered: () => {},
  itemHover: null,
  setItemHover: () => {},
  detailItem: null,
  setDetailItem: () => {},
});

export function HoverProvider({ children }: { children: ReactNode }) {
  const [hovered, setHovered] = useState<HoverSection>(null);
  const [itemHover, setItemHover] = useState<ItemHover>(null);
  const [detailItem, setDetailItem] = useState<DetailItem>(null);
  return (
    <HoverContext.Provider
      value={{ hovered, setHovered, itemHover, setItemHover, detailItem, setDetailItem }}
    >
      {children}
    </HoverContext.Provider>
  );
}

export function useHover() {
  return useContext(HoverContext);
}
