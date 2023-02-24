import requests
from parsel import Selector


response = requests.get("https://httpbin.org/encoding/utf8")
print(response.text)


response = requests.get("https://api.github.com/users")
users = response.json()
for user in users:
    print(f"{user['login']} {user['url']}")


response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)

assert "bot detected" not in response.text


URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = Selector(response.text)

title = selector.css("h1::text").get()

price = selector.css(".product_main > .price_color::text").re_first(
    r"£\d+\.\d{2}"
)

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

image_url = selector.css("#product_gallery img::attr(src)").get()

print(title)
print(price)
print(description)
print(image_url)
