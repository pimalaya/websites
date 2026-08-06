---
title: The story behind Pimalaya
description: A Vim plugin that had no business managing mail, the backlash and the love it got, and the split between UI and logic that became a whole project.
date: 2026-08-03
---

Pimalaya is today a constellation of low-level libraries, CLIs, TUIs and mobile apps around personal information management. But it did not start as a project, nor as a plan. It started as a Vim plugin that had no business existing.

## Mails inside Vim

Years ago I discovered Vim, and like many people who fall into it, I fell hard. Once your editor becomes the place where you think, you want everything in it: notes, tasks, code, and, in my case, mails.

So I wrote [iris.vim](https://github.com/soywod/iris.vim), a plugin to manage mails inside Vim. Reading, replying, archiving, without leaving the editor.

The reception was… polarized. Some people hated me for torturing Vim: it is a text editor, not a mail client, and the plugin ecosystem was never meant to carry a mail workflow. Others loved the concept: their editor was already their home, and mail was the one thing still dragging them elsewhere.

Both sides were right, and that tension turned out to be the founding insight of everything that came after.

## Splitting the UI from the logic

The critics had a point: Vim is a terrible place to *implement* a mail client. Fetching, parsing, encoding, talking to servers: none of that belongs in a plugin. But the lovers had a point too: Vim is a wonderful place to *display* one.

This is where I started to split the UI from the logic. The domain (everything mail knows how to do) should live outside the editor, in a proper program. The editor should only be a frontend: buffers in, keystrokes out.

Once the logic is its own program, the frontend becomes swappable. Vim today, something else tomorrow.

## A CLI, in Rust

The shape of that program came naturally: a command-line interface. I had wanted to learn Rust for a while, and a mail CLI fit perfectly: innovative (the terminal mail world was full of TUIs like mutt, but a plain, scriptable CLI was rare), the right size for learning a new language, and exactly the backend a Vim frontend needed. The plugin would just shell out and render the output.

That CLI became [Himalaya](https://github.com/pimalaya/himalaya).

## Then it grew

The CLI was supposed to be the end of the story. It was actually the beginning, and the same splitting instinct kept applying itself one level down:

- The email logic was extracted from the CLI into a dedicated library, so other tools could reuse it.
- The protocol logic was extracted from the email library into low-level libraries (IMAP, SMTP, and friends), so the email layer itself became swappable.
- A TUI joined the CLI, proving the point of the whole architecture: same logic, another frontend.
- Then other PIM domains knocked on the door: if it works for mails, why not contacts? Why not calendars?

At some point this stopped being "the Himalaya ecosystem" and became its own project: Pimalaya.

## Here we are

Today Pimalaya is full of low-level libraries, and fully mail-capable: Himalaya CLI, a TUI, mobile apps on the way. Contacts are coming next, then calendars.

The plugin that tortured Vim is long gone, but its lesson is load-bearing in everything we build: the domain logic lives in reusable layers, and the UI (editor, terminal, phone) is just a view on it.

Not bad for a plugin some people hated.
