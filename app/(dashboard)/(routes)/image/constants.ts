import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Solicitação de foto é necessária"
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

export const amountOptions = [
  {
    value: "1",
    label: "1 Foto"
  },
  {
    value: "2",
    label: "2 Foto"
  },
  {
    value: "3",
    label: "3 Foto"
  },
  {
    value: "4",
    label: "4 Foto"
  },
  {
    value: "5",
    label: "5 Foto"
  }
];

export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
];
