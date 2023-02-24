import requests
import time
from parsel import Selector


# Timeout
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)
    time.sleep(6)


# Rate Limit
try:
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.Timeout:
    response = requests.get("http://httpbin.org/delay/10", timeout=15)
finally:
    print(response.status_code)


# Selector
site_url = "http://books.toscrape.com/"
response = requests.get(site_url)
selector = Selector(text=response.text)
print(selector.css("img.thumbnail").get())

for url in selector.css("div.image_container a::attr(href)").getall():
    thumb_request = requests.get(site_url + url)
    thumb_selector = Selector(text=thumb_request.text)
    book_title = thumb_selector.css("div.product_main h1")
    print(book_title.get())


# Raspando mais páginas
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"
while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()
        print(title, price)
    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()


# Limpando os dados com expressões regulares
response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# Extrai todos os preços da primeira página
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)

response = requests.get(
    "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
)
selector = Selector(text=response.text)

# Extrai a descrição
description = selector.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]
print(description)
