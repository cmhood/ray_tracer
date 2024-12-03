.POSIX:
.SUFFIXES:

ray_tracer.html: src/script.js src/style.css src/page.html.sh
	src/page.html.sh >$@

src/script.js: src/script.ts
	tsc --strict -m none -t es6 --outFile $@ src/script.ts || \
	    (rm -f $@ && false)

clean:
	rm -f ray_tracer.html src/script.js

.PHONY: clean
