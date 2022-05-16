require 'nokogiri'
require 'open-uri'

urls = %w[
  https://www.ito-spo.com/
  https://www.ito-spo.com/staff/
  https://www.ito-spo.com/menu/
  https://www.ito-spo.com/facility/
  https://www.ito-spo.com/faq/
  https://www.ito-spo.com/access/
  https://www.ito-spo.com/voices/
  https://www.ito-spo.com/contact/
  https://www.ito-spo.com/sitemap/
  https://www.ito-spo.com/symptomscat/post-3650/
  https://www.ito-spo.com/symptomscat/post-2792/
  https://www.ito-spo.com/symptomscat/post-2607/
  https://www.ito-spo.com/symptomscat/1679/
]
titles = %w[
  top staff menu facility faq access voices contact sitemap post1 post2 post3 post4
]
result = titles.zip(urls)
hash = result.to_h
puts hash

hash.each do |title, url|
  File.open("./template/#{title}.html", 'w+') do |f|
    html = URI.open(url)
    f.write(html.read)
    html.close
  end
end
