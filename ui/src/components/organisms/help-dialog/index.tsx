import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../fundamentals/button"
import DiscordIcon from "../../fundamentals/icons/discord-icon"
import InputField from "../../molecules/input"
import TextArea from "../../molecules/textarea"

import * as Dialog from "@radix-ui/react-dialog"

type MailDialogProps = {
  onClose: () => void
  open: boolean
}

const MailDialog = ({ open, onClose }: MailDialogProps) => {
  const { t } = useTranslation()
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  const [link, setLink] = useState("mailto:support@medusajs.com")

  React.useEffect(() => {
    setLink(
      `mailto:support@medusajs.com?subject=${encodeURI(
        subject
      )}&body=${encodeURI(body)}`
    )
  }, [subject, body])

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Overlay className="fixed bottom-0 end-0 start-0 top-0 z-50 grid place-items-end overflow-y-auto">
        <Dialog.Content className="bg-grey-0 shadow-dropdown rounded-rounded fixed bottom-2 end-3 top-[64px] flex w-[400px] flex-col justify-between p-8">
          <div>
            <Dialog.Title className="inter-xlarge-semibold mb-1">
              {t("help-dialog-how-can-we-help", "How can we help?")}
            </Dialog.Title>
            <Dialog.Description className="inter-small-regular text-grey-50 mb-6">
              {t(
                "help-dialog-we-usually-respond-in-a-few-hours",
                "We usually respond in a few hours"
              )}
            </Dialog.Description>
            <InputField
              label={t("help-dialog-subject", "Subject")}
              value={subject}
              className="mb-4"
              placeholder={t(
                "help-dialog-what-is-it-about",
                "What is it about?..."
              )}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextArea
              label={t("help-dialog-how-can-we-help", "How can we help?")}
              placeholder={t(
                "help-dialog-write-a-message",
                "Write a message..."
              )}
              value={body}
              onChange={(e) => {
                setBody(e.target.value)
              }}
              rows={8}
              enableEmoji
            />
          </div>
          <div className="gap-y-base flex flex-col items-center">
            <a
              href="https://discord.gg/medusajs"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full cursor-pointer"
            >
              <div className="rounded-rounded group-hover:bg-grey-5 py-small flex w-full flex-col items-center justify-center">
                <span className="text-grey-40 mb-3">
                  <DiscordIcon size={24} />
                </span>
                <p className="text-grey-40 inter-small-regular text-center leading-6">
                  {t(
                    "help-dialog-feel-free-to-join-our-community-of",
                    "Feel free to join our community of"
                  )}
                  <br />
                  {t(
                    "help-dialog-merchants-and-e-commerce-developers",
                    "merchants and e-commerce developers"
                  )}
                </p>
              </div>
            </a>
            <a className="w-full" href={link}>
              <Button variant="primary" size="large" className="w-full">
                {t("help-dialog-send-a-message", "Send a message")}
              </Button>
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Root>
  )
}

export default MailDialog
