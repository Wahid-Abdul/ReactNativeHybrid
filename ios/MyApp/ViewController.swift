//
//  ViewController.swift
//  MyApp
//
//  Created by Abdul Wahid on 26/04/23.
//

import UIKit
import React
import CodePush

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    
    @IBAction func highScoreButtonPressed(_ sender: UIButton) {
        NSLog("Hello")
         let jsCodeLocationDebug = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
         let mockData:NSDictionary = ["scores":
             [
                 ["name":"Alex", "value":"42"],
                 ["name":"Joel", "value":"10"]
             ]
         ]


        let jsCodeLocation = CodePush.bundleURL()!
        var jsBundle = jsCodeLocationDebug
        #if DEBUG
            jsBundle = jsCodeLocationDebug
        #else
            jsBundle = jsCodeLocation
        #endif
         let rootView = RCTRootView(
             bundleURL: jsBundle,
             moduleName: "SettingsIndex",
             initialProperties: mockData as [NSObject : AnyObject],
             launchOptions: nil
         )
         let vc = UIViewController()
         vc.view = rootView
         self.present(vc, animated: true, completion: nil)


    }
    
    
    @IBAction func dashboardButtonPressed(_ sender: UIButton) {
        NSLog("Hello")
         let jsCodeLocationDebug = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
         let mockData:NSDictionary = ["scores":
             [
                 ["name":"Alex", "value":"42"],
                 ["name":"Joel", "value":"10"]
             ]
         ]
        let jsCodeLocation = CodePush.bundleURL()!
        var jsBundle = jsCodeLocationDebug
        #if DEBUG
            jsBundle = jsCodeLocationDebug
        #else
            jsBundle = jsCodeLocation
        #endif
        
         let rootView = RCTRootView(
             bundleURL:  jsBundle,
             moduleName: "DashboardIndex",
             initialProperties: mockData as [NSObject : AnyObject],
             launchOptions: nil
         )
         let vc = UIViewController()
         vc.view = rootView
         self.present(vc, animated: true, completion: nil)


    }

}

